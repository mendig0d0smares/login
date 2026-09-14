const conn = require('./db/conn')
const { Ciclista, Agendamento, Bicicleta } = require('./models/rel')

async function syncDataBase() {
    try {
        await conn.sync({ force: true })
        console.log('Tabelas criadas e sincronizadas')
    } catch (err) {
        console.error('Erro ao sincronizar as tabelas:', err)
    } finally {
        await conn.close()
        console.log('Conexão com o banco de dados fechada.')
    }
}

syncDataBase()