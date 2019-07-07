package br.ufscar.dc.dsw


import grails.rest.*

@Resource(uri='/promocoes', readOnly = false, formats = ['json', 'xml'])
class Promocao {    

    String nomePeca
    Float preco
    String data
    String horario
    Site site
    Teatro teatro

}
