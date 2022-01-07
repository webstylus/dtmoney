import React from "react";
import ReactDOM from "react-dom";
import {App} from "./App";
import {createServer, Model} from 'miragejs';

createServer({
    models: {
        transaction: Model,
    },
    seeds(server) {
        server.db.loadData({
            transactions: [
                {
                    id: 1,
                    title: 'Freelancer de Website Movida',
                    category: 'Desenvolvimento',
                    type: 'deposit',
                    amount: 10000,
                    createdAt: new Date('2022-01-06 09:00:00')
                },
                {
                    id: 2,
                    title: 'Freelancer de ItAccept',
                    category: 'Desenvolvimento',
                    type: 'deposit',
                    amount: 6500,
                    createdAt: new Date('2022-12-27 19:30:10')
                },
                {
                    id: 3,
                    title: 'Aluguel',
                    category: 'Despesas',
                    type: 'withdraw',
                    amount: 1865,
                    createdAt: new Date('2022-01-01 09:10:54')
                }
            ]
        })
    },
    routes() {
        this.namespace = 'api'

        this.get('/transactions', () => {
            return this.schema.all('transaction')
        })

        this.post('/transactions', (schema, request) => {
            const data = JSON.parse(request.requestBody)
            return schema.create('transaction', data);
        })
    }
})

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById("root")
);
