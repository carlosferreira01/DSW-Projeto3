package server

import br.ufscar.dc.dsw.Site
import br.ufscar.dc.dsw.Teatro
import br.ufscar.dc.dsw.Promocao

class BootStrap {

    def init = { servletContext ->
    
    
        Site globo = new Site (email: 'globo@gmail.com' ,senha: '123', nome: 'Globo', url: 'www.globo.com',telefone: '37444432')
        globo.save()
        Site uol = new Site (email: 'uol@gmail.com' ,senha: '12345', nome: 'Uol', url: 'www.uol.com',telefone: '32313211')
        uol.save()
        Teatro arroz = new Site (email: 'arroz@teatro.com' ,senha: '123', cnpj: '111111111111', nome: 'Teatro Arroz',cidade: 'Franca')
        arroz.save()

    }
    def destroy = {
    }
}
