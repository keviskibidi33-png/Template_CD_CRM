export type CdHumedadPunto = {
    recipiente_numero?: string
    peso_recipiente_g?: number | null
    peso_recipiente_suelo_humedo_g?: number | null
    peso_recipiente_suelo_seco_g?: number | null
    peso_agua_g?: number | null
    peso_suelo_g?: number | null
    contenido_humedad_pct?: number | null
}

export type CdPayload = {
    muestra: string
    numero_ot: string
    fecha_ensayo: string
    peso_kg?: Array<number | null>
    esf_normal?: Array<number | null>
    carga_kg_1?: Array<number | null>
    carga_kg_2?: Array<number | null>
    carga_kg_3?: Array<number | null>
    def_horizontal?: number[]
    humedad_puntos?: CdHumedadPunto[]
    recipiente_numero?: string
    peso_recipiente_g?: number | null
    peso_recipiente_suelo_humedo_g?: number | null
    peso_recipiente_suelo_seco_g?: number | null
    peso_agua_g?: number | null
    peso_suelo_g?: number | null
    contenido_humedad_pct?: number | null
    hora_1?: string[]
    deform_1?: Array<number | null>
    hora_2?: string[]
    deform_2?: Array<number | null>
    hora_3?: string[]
    deform_3?: Array<number | null>
    realizado_por?: string
    revisado_por?: string
    aprobado_por?: string
    [key: string]: unknown
}

export type ModuloPayload = CdPayload

export type EnsayoDetail = {
    id: number
    numero_ensayo?: string | null
    numero_ot?: string | null
    cliente?: string | null
    muestra?: string | null
    fecha_documento?: string | null
    estado?: string | null
    payload?: CdPayload | null
}

export type SaveResponse = {
    id: number
    numero_ensayo: string
    numero_ot: string
    estado: string
}
