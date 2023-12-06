
class UserModel {
  static instance = null;

  email;
  id;
  senha;
  name;
  tipo;
  cpf;

  constructor() {

    if (!UserModel.instance) {
      UserModel.instance = this;
    }

    return UserModel.instance;
  }

  updateFields(data) {
    this.email = data.email || this.email;
    this.id = data.id || this.id;
    this.senha = data.senha || this.senha;
    this.name = data.name || this.name;
    this.tipo = data.tipo || this.tipo;
    this.cpf = data.cpf || this.cpf;
  }

  toJson() {

    return {
      cpf: this.cpf,
      email: this.email,
      id: this.id,
      senha: this.senha,
      name: this.name,
      tipo: this.tipo,
    };
  }

   isAuthenticated(){
    return  this.cpf !== undefined;
  }
}

export default UserModel;
