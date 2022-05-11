import { Injectable } from "@nestjs/common";
import { Usuario } from "./usuario.entity";

@Injectable()
export class UsuarioService{
    private usuarios: Array<Usuario> = [{
            id:1,
            nome: 'lucas',
            email: 'lucas',
            senha: 'lucas',
        }
    ];

    public store(usuario: Usuario): Usuario{
        this.usuarios.push(usuario);
        
        return usuario;
    }

    public buscaNome(nome: string): Usuario{
        return this.usuarios.find(usuario => usuario.nome == nome)
    }
}