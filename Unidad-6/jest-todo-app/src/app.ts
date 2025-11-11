
import express from 'express';
import { TodoService } from './services/todo.service';
import { buildTodoRouter } from './routes/todo.routes';

const app = express();
app.use(express.json());

const todoService = new TodoService([
    { id: '1', title: 'Tarea 1', completed: false, createdAt: new Date() },
    { id: '2', title: 'Tarea 2', completed: true, createdAt: new Date() },
])

app.use('/todos', buildTodoRouter(todoService));

app.get('/health', (_req, res) => res.json({ ok: true }));

export default app;
