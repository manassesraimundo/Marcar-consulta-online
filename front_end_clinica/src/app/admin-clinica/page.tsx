import 'bootstrap/dist/css/bootstrap.min.css';

import { get_consultas_marcadas } from '@/servers/api';
import ListarPaciente from '@/components/ListarPaciente';

export default async function AdminClinica() {

  const consultas = await get_consultas_marcadas()

  return (
    <div>
      <ListarPaciente lista={consultas} />
    </div>
  )
}