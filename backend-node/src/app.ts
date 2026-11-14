import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import contatoRoutes from './routes/contato.routes';
import orcamentoRoutes from './routes/orcamento.routes';
import solicitacaoRoutes from './routes/solicitacao.routes';

dotenv.config();

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/contatos', contatoRoutes);
app.use('/api/orcamentos', orcamentoRoutes);
app.use('/api/solicitacoes', solicitacaoRoutes);

export default app;