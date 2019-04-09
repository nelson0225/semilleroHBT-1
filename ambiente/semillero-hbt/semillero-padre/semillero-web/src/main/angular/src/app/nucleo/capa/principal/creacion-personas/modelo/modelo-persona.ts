export interface modeloPersona {
    id: string;
    nombre: string;
    apellido: string;
    tipoIdentificacion: string;
    numeroIdentificacion: number | string;
    numeroTelefonico: number;
    edad: number;
    estado: string;
    mayorEdad: boolean;
    sexo: string;
    rol: string;
}