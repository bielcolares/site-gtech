import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const body = await request.json();
  const {
    nome,
    cargo,
    empresa,
    email,
    telefone,
    tipo,
    volume,
    local,
    mensagem,
  } = body;

  try {
    await resend.emails.send({
      from: 'Site GTech <onboarding@resend.dev>',
      to: 'comercial@gtech.com.br',
      subject: `Contato Comercial Site: ${empresa} - ${nome}`,
      html: `
        <h2>Novo contato via site GTech</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Cargo:</strong> ${cargo}</p>
        <p><strong>Empresa:</strong> ${empresa}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <hr/>
        <p><strong>Tipo de Resíduo:</strong> ${tipo}</p>
        <p><strong>Volume Estimado:</strong> ${volume}</p>
        <p><strong>Localização:</strong> ${local}</p>
        <hr/>
        <p><strong>Mensagem:</strong> ${mensagem}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
