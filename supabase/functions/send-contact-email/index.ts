import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message }: ContactEmailRequest = await req.json();

    console.log("Envoi d'email de contact:", { name, email });

    // Envoyer un email au propriétaire de la pâtisserie
    const emailToOwner = await resend.emails.send({
      from: "La Délice Sucrée <onboarding@resend.dev>",
      to: ["contact@ladelicesucree.fr"], // Remplacez par votre email
      subject: `Nouveau message de ${name}`,
      html: `
        <h2>Nouveau message depuis le site</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    // Envoyer un email de confirmation au client
    const emailToClient = await resend.emails.send({
      from: "La Délice Sucrée <onboarding@resend.dev>",
      to: [email],
      subject: "Nous avons reçu votre message !",
      html: `
        <h1>Merci ${name} !</h1>
        <p>Nous avons bien reçu votre message et nous vous répondrons dans les plus brefs délais.</p>
        <p>Votre message:</p>
        <p style="background: #f5f5f5; padding: 15px; border-radius: 5px;">${message.replace(/\n/g, "<br>")}</p>
        <p>À très bientôt,<br><strong>L'équipe La Délice Sucrée</strong></p>
      `,
    });

    console.log("Emails envoyés avec succès:", { emailToOwner, emailToClient });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
