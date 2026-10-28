function irprincipal () {
            window.location.href = "/page/index.html"
        }

        function procesarConsulta() {
            const nombre = document.getElementById('nombre').value;
            const materia = document.getElementById('materia').value;
            
            alert(`Estimado(a) ${nombre},\n\nSu caso del área "${materia}" ha sido recibido con éxito por ESJURIASO IPSO JURE S.A.S.\n\nNuestra mesa interna revisará la fundamentación jurídica de los hechos ingresados y un abogado especialista se contactará de inmediato.`);
            
            document.getElementById('lawForm').reset();
        }

        const links = document.querySelectorAll('.nav-link');
        links.forEach(link => {
            link.addEventListener('click', function() {
                links.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            });
        });
