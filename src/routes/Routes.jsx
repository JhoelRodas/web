import { BrowserRouter as Router, Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import FormLogin from '../components/users/FormLogin';
import FormRegister from '../components/users/FormRegister';
import ForgotPassword from '../components/users/ForgotPassword';
import ProtectedRoute from '../components/layout/ProtectedRoute';
import { useAuth } from '../context/AuthContext';
import Perfil from '../components/users/Perfil';
import ManageEmployees from '../components/views/personal/ManageEmployees';
import ManageRoles from '../components/views/administrador/ManageRoles';
import ManagePermissions from '../components/views/administrador/ManagePermissions';
import ManageProfession from '../components/views/personal/ManageProfession';
import ManageUsuarios from '../components/views/administrador/ManageUsuarios';
import Home from '../components/pages/Home';
import ManageEspeciality from '../components/views/registro/ManageEspeciality';
import ManagePatients from '../components/views/atencionesMedicas/ManagePatients';
import ManageSpecialists from '../components/views/personal/ManageSpecialists';
import ProgrammingCalendar from '../components/views/configuracion/ProgrammingCalendar';
import BookAppointmentsAdm from '../components/views/atencionesMedicas/Horarios y registro de citas/BookAppointmentsAdm';
import ManageAppointments from '../components/views/atencionesMedicas/AdmCitas/ManageAppointments';
import ManageBitacoraData from '../components/views/administrador/ManageBitacoraData';
import ManagePagos from '../components/views/registro/ManagePagos';

const MyRoutes = () => {
    const { isLoggedIn } = useAuth();
    return (
        <Routes>
            {/* no logged*/}
            {!isLoggedIn ? (
                <>
                    <Route path="/login" element={<FormLogin />} />
                    <Route path="/register" element={<FormRegister />} />
                    <Route path="/forgotPassword" element={<ForgotPassword />} />
                </>
            ) : (
                <>
                    {/* Si el usuario está logueado, redirigir cualquier intento de acceder a las rutas públicas al home */}
                    <Route path="/login" element={<Navigate to="/home" />} />
                    <Route path="/register" element={<Navigate to="/home" />} />-
                    <Route path="/forgotPassword" element={<Navigate to="/home" />} />
                </>
            )}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            {/*Protected Routes */}
            <Route element={<ProtectedRoute />}>
                <Route path="/perfil" element={<Perfil />} />

                <Route path="/admin/roles" element={<ManageRoles />} />
                <Route path="/admin/permissions" element={<ManagePermissions />} />
                <Route path="/admin/users" element={<ManageUsuarios />} />

                <Route path="/personnel/professions-registry" element={<ManageProfession />} />
                <Route path="/personnel/manageEmployees" element={<ManageEmployees />} />
                <Route path="/admin/specialties" element={<ManageEspeciality />} />
                <Route path="/medical-care/patient-registry" element={<ManagePatients />} />
                <Route path="/personnel/manageSpecialists" element={<ManageSpecialists />} />
                <Route path="/settings/programmingCalendar" element={<ProgrammingCalendar />} />
                <Route path="/medical-care/bookAppointmentsAdm" element={<BookAppointmentsAdm />} />
                <Route path="/medical-care/manageAppointments" element={<ManageAppointments />} />
                <Route path="/admin/pagosrealizados" element={<ManagePagos />} />

                <Route path="/admin/access-log" element={<ManageBitacoraData/>} />
                
            </Route>
            {/* Ruta por defecto para redirigir a login si no coincide ninguna ruta */}
            <Route path="*" element={<Navigate to={isLoggedIn ? "/home" : "/login"} />} />
        </Routes>
    )
}

export default MyRoutes