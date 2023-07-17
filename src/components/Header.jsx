export const Header = () => {
    return (
        <header>
            <div class="modal">
            <form id="login" action="#" method="get">
                <button class="close">
                     <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m330-288 150-150 150 150 42-42-150-150 150-150-42-42-150 150-150-150-42 42 150 150-150 150 42 42ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"/></svg>
                </button>                        
                <fieldset>
                    <legend>Inicia Sesión</legend>
                    <ul>
                        <li class="form-content">
                            <label for="email">Email:</label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email"                                         
                                placeholder="Ingresa tu correo electrónico"
                                required 
                            />
                        </li>
                        <li class="form-content">
                            <label for="password">Contraseña:</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Escribe tu contraseña"
                                required 
                            />
                        </li>
                        <li class="form-content">
                            <button class="entrar">
                                <a href="./entrenamientos.html">Entrar</a>
                            </button>                    
                        </li>
                    </ul>
                </fieldset>
                <p>Aún no estas registrado? <button class="registrar">Registrate</button></p>
            </form>
            <form id="registro" action="#" method="get">
                <button class="close">
                    <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m330-288 150-150 150 150 42-42-150-150 150-150-42-42-150 150-150-150-42 42 150 150-150 150 42 42ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"/></svg>
                </button>
                <fieldset>                        
                    <legend>Nuevo usuario</legend>
                    <ul>
                        <li class="form-content">
                            <label for="name">Nombre:</label>
                            <input 
                                type="text" 
                                name="name" 
                                id="name" 
                                placeholder="Ingresa tu nombre"
                                required 
                            />
                        </li>
                        <li class="form-content">
                            <label for="email">Email:</label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                placeholder="Ingresa tu correo electrónico"
                                required
                             />
                        </li>
                        <li class="form-content">
                            <label for="password">Contraseña:</label>
                            <input
                                type="text"
                                name="password"
                                id="password"
                                placeholder="Escribe tu contraseña"
                                required 
                            />
                        </li>
                        <li class="form-content">
                            <button type="submit" class="registrarte">
                                <a href="./entrenamientos.html">Registrate</a>
                            </button>
                        </li>                        
                    </ul>
                </fieldset>
            </form>
        </div>
        <img id="logo" src="media/logo1.svg" alt="Logo"/>
        </header>
    );
}