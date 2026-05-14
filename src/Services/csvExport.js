export async function exportUsersToCSV(users) {
    return new Promise((resolve) => {

        //setTimeout - Simulación de espera (2 segundos)
      setTimeout(() => {
        const headers = [
          'Nombre',
          'Email',
          'Genero',
          'Edad',
          'Pais',
        ]
  
        // Convertir usuarios en filas
        const rows = users.map((user) => [
          `${user.name.first} ${user.name.last}`,
          user.email,
          user.gender,
          user.dob.age,
          user.location.country,
        ])
  
        // Construcción del contenido CSV
        const csvContent = [
          headers,
          ...rows,
        ]
          .map((row) => row.join(',')) //Convertir arrays a texto CSV
          .join('\n') 
  
          //Blob crae un archivo en memoria
        const blob = new Blob([csvContent], {
          type: 'text/csv;charset=utf-8;',
        })
  
        //Crear URL temporal - Ejemplo---> blob:http://localhost/123abc
        const url = URL.createObjectURL(blob)
  
        const link = document.createElement('a')
  
        link.href = url
        link.download = 'users.csv'
  
        link.click()
        URL.revokeObjectURL(url)

        resolve()
      }, 2000)
    })
  }