function irprincipal () {
            window.location.href = "/page/index.html"
        }

        function procesarConsulta() {
            const nombre = document.getElementById('nombre').value.trim();
            const materia = document.getElementById('materia').value;
            const hechos = document.getElementById('hechos').value.trim();

            const mensaje = [
                'Hola, deseo agendar un análisis de caso con ESJURIASO IPSO JURE S.A.S.',
                '',
                `Nombre: ${nombre}`,
                `Materia jurídica: ${materia}`,
                'Resumen de los hechos:',
                hechos
            ].join('\n');

            const urlWhatsApp = `https://wa.me/593991886352?text=${encodeURIComponent(mensaje)}`;
            window.open(urlWhatsApp, '_blank', 'noopener,noreferrer');
        }

        const links = document.querySelectorAll('.nav-link');
        links.forEach(link => {
            link.addEventListener('click', function() {
                links.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            });
        });

