import express, {Request, Response} from "express";
import serveStatic from "serve-static";
export default class Server{
    constructor(private port:number) {
    }
    public start():void{
        const app=express();
        //pour utiliser un middleware comme ça "app.use(xxx)"
        app.use(serveStatic("public")); //pour specifier le dossier des ressources statiques
        app.get("/",(req:Request,resp :Response)=>{
            resp.send("Test ....");
        });
        app.listen(this.port,()=>{
            console.log("Server Started...");
        });
    }
}