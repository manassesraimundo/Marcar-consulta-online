import axios from "axios"

// ====================== GET ===========================
export async function get_consultas_marcadas() {
    const get_mes = await axios.get("http://localhost:8000/api_data/")
    return get_mes.data
}

export async function get_consultas() {
    const res = await axios.get("http://localhost:8000/api_data/consultas/")
    return res.data.slice(0, 6)
}

export async function get_consultas_id(id: any) {
    const res = await axios.get(`http://localhost:8000/api_data/id_pacient/${id}`)
    return res.data
}

export async function get_info_footer() {
    const res = await axios.get("http://localhost:8000/api_data/info_clinica/")
    return res.data
}

// ===================== POST ===========================
export async function new_consulta(nome: string, telefone: string, email: string, data: string, lista: any) {
    try {
        await axios({
            method: "POST",
            url: "http://localhost:8000/api_data/marcar_consulta/",
            data: {
                nome_paciente: nome,
                telefone: telefone,
                email: email,
                data_marcar_consulta: data,
                consulta: lista
            }
        })
        alert(`Sua consulta foi marcada para a/o  ${data} com sucesso.\n\nCLEAN ODONTO`)
    } catch (error) {
        console.error('Erro ao marcar consulta:', error);
    }
}

// ======================= DELETE ===================
export async function delete_consulta(nome: string, telefone: string) {
    try {
        let no = nome
        let tel = telefone
        await axios({
            method: 'DELETE',
            url: `http://localhost:8000/api_data/marcar_consulta/deletar_consulta_marcada/${no}/${tel}`,
            data: {
                nome_paciente: nome,
                telefone: telefone
            }
        })
        alert(`Sr(a) ${nome}, sua consulta foi cancelada com sucesso.\n\nCLEAN ODONTO`)
    } catch (error) {
        console.error('Erro ao marcar consulta:', error)
    }
}