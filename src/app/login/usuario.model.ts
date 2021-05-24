export class Usuario {

    constructor(
        public id: string,
        public email: string,
        private tokenUsuario: string,
        private tokenExpiration: Date
    ) { }

    get token() {
        if (!this.tokenExpiration || this.tokenExpiration <= new Date()) {
            return null;
        }
        return this.tokenUsuario;
    }
}
