import { useFormLite } from 'react-use-form-lite';


function App() {

  // Valores iniciales del formulario
  const initialFormValues = {
    input_hidden: 'Urian Viera',
    nombre: '',
    edad: 0,
    email: '',
    range: '20',
    date_now: '',
    time_now: '',
    pais: '',
    teGustaReact: false,
    aceptaTerminos: '',
    tareas: '',
    password: '',
    telefono: '',
    url_web: '',
    datetime_now: '',
    month_now: '',
    week_now: '',
    my_color: '',
    my_search: '',
    lenguajes: [],
    avatar: '',
    multipleFiles: [],
  };

  const handleFormSubmit = (formData) => {
    console.log('Datos del formulario enviados:', formData);

    console.log('Campos vacios:', getEmptyFields())

    // Verificar si se ha seleccionado un archivo
    if (values.avatar) {
      console.log("Archivo seleccionado:", values.avatar);
    }

    // Verificar si se han cargado archivos
    if (values.multipleFiles.length > 0) {
      values.multipleFiles.forEach((file) => {
        console.log("Archivos cargados:", file)
      });
    }

  };


  const {
    values,
    handleSubmit,
    register,
    registerFile,
    resetForm,
    getEmptyFields
  } = useFormLite(initialFormValues, handleFormSubmit);

  return (
    <>
      <h1 style={{ textAlign: 'center', margin: '40px 0' }}>
        Formulario con <code>react-use-form-lite</code>
      </h1>
      <p style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 20px', lineHeight: 1.6 }}>
        Esta implementación no utiliza <code className='fw-bold'>TypeScript</code> y tiene fines exclusivamente didácticos.
        Puedes revisar el código fuente del formulario en el repositorio de {' '}
        <a href="https://github.com/urian121/react-use-form-lite" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>.
      </p>

      <div className="app-container">
        <form onSubmit={handleSubmit}>
          <div>
            {/* Input tipo hidden */}
            <input type="hidden"  {...register('input_hidden')} />
          </div>

          <div>
            {/* Input tipo Text */}
            <input type='text' {...register('nombre')} placeholder='Escribe tu nombre' />
          </div>

          <div>
            {/* Input tipo Number */}
            <input type='number' {...register('edad')} placeholder='Escribe tu edad' />
          </div>

          <div>
            {/* Input tipo Email */}
            <input type="email" {...register('email')} placeholder='Escribe tu email' />
          </div>

          <div>
            {/* Input tipo month */}
            <input type="month" {...register('month_now')} />
          </div>

          <div>
            {/* Input tipo week */}
            <input type="week" {...register('week_now')} />
          </div>

          <div>
            {/* Input tipo Password */}
            <input type="password" {...register('password')} placeholder="Contraseña"></input>
          </div>

          <div>
            {/* Input tipo search */}
            <input type="search" {...register('my_search')} placeholder="Buscar" />
          </div>

          <div>
            {/* Input tipo Tel */}
            <input type="tel" {...register('telefono')} placeholder="Teléfono" />
          </div>

          <div>
            {/* Input tipo url */}
            <input type="url" {...register('url_web')} placeholder="https://urianviera.com" />
          </div>

          <div>
            {/* Input tipo Range */}
            <input type="range" {...register('range')} />
          </div>

          <div>
            {/* Input tipo Date */}
            <input type="date" {...register('date_now')} placeholder='Seleccione una fecha' />
          </div>

          <div>
            {/* Input tipo time */}
            <input type="time" {...register('time_now')} />
          </div>

          <div>
            {/* Input tipo datetime-local */}
            <input type="datetime-local" {...register('datetime_now')} />
          </div>

          <div>
            {/* Input tipo Checkbox */}
            <label><input type="checkbox" {...register('teGustaReact')} /> Sí</label>
          </div>

          {/* Input tipo Radio */}
          <label>
            <input type="radio" {...register('aceptaTerminos')} value="Sí" /> Sí
          </label>
          <label>
            <input type="radio" {...register('aceptaTerminos')} value="No" /> No
          </label>

          <div>
            {/* Input tipo Textarea */}
            <textarea {...register('tareas')} placeholder='Escribe tu comentario' />
          </div>

          <div>
            {/* Input tipo Select */}
            <select {...register('pais')}>
              <option value="">Seleccione un país</option>
              <option value="Colombia">Colombia</option>
              <option value="México">México</option>
              <option value="Venezuela">Venezuela</option>
            </select>
          </div>

          <div>
            {/* Input tipo color */}
            <input type="color" {...register('my_color')} />
          </div>

          <div>
            {/* Input tipo file - AHORA USANDO registerFile en lugar de register */}
            <input type="file" {...registerFile('avatar')} />
          </div>

          <div>
            {/* Input tipo file con multiple - AHORA USANDO registerFile */}
            <input type="file" multiple {...registerFile('multipleFiles')} />
          </div>

          <div>
            {/* múltiples checkboxes */}
            <label>HTML
              <input type="checkbox" {...register('lenguajes')} value='HTML' />
            </label>
            <label> JavaScript
              <input type="checkbox" {...register('lenguajes')} value='JavaScript' />
            </label>
            <label>React
              <input type="checkbox" {...register('lenguajes')} value='React' />
            </label>
          </div>

          <div className='mt-3'>
            <button type="submit">Enviar</button>
            <button type="button" onClick={resetForm} style={{ marginLeft: '10px' }}>
              Resetear
            </button>
          </div>
        </form>

        <div className="datos-debug">

          <pre>
            {JSON.stringify({
              informacionFormulario: {
                ...values,
                avatar:
                  values.avatar && typeof values.avatar !== 'string'
                    ? {
                      name: values.avatar.name,
                      size: values.avatar.size,
                      type: values.avatar.type,
                    }
                    : values.avatar || null,
                multipleFiles: values.multipleFiles.length > 0
                  ? values.multipleFiles.map((file) => ({
                    name: file.name,
                    size: file.size,
                    type: file.type,
                  }))
                  : [],
              },
              camposVacios: getEmptyFields(),
            }, null, 2)}
          </pre>


        </div>
      </div >
    </>
  );
}

export default App;