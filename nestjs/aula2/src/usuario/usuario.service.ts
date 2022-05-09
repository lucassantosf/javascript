export class UsuarioService{
    private usuarios = [];

    public store(usuario){
        this.usuarios.push(usuario);
        
        return usuario;
    }
}