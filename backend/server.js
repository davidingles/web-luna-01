import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const app=express();const port=process.env.PORT||3000;const root=path.dirname(fileURLToPath(import.meta.url));
app.use(express.json());app.use(express.static(path.join(root,'..','frontend')));
app.get('/api/health',(_request,response)=>response.json({ok:true}));
app.post('/api/contact',(request,response)=>{const {name,email,message}=request.body;if(!name||!email||!message)return response.status(400).json({error:'Faltan campos obligatorios.'});console.log(`Nueva consulta de ${name} <${email}>: ${message}`);return response.status(201).json({ok:true})});
app.use((_request,response)=>response.sendFile(path.join(root,'..','frontend','index.html')));
app.listen(port,()=>console.log(`VerdeForma disponible en http://localhost:${port}`)).on('error',(error)=>{if(error.code==='EADDRINUSE')console.error(`El puerto ${port} ya está ocupado. Ejecuta $env:PORT='3001' y después npm start.`);else console.error(error)});
