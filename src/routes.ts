import {FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from "fastify"

export default async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
        reply.type('text/html').send(`
            <!DOCTYPE html>
            <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Meu Projeto Fastify</title>
                <style>
                    body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
                    h1 { color: #333; }
                </style>
            </head>
            <body>
                <h1>Olá! Seu servidor Fastify está funcionando! 🚀</h1>
                <p>Acesse <a href="/teste">/teste</a> para ver a API.</p>
            </body>
            </html>
        `);
    });

    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return {ok: true}
    })
}