package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Evento;
import com.example.demo.service.EventoService;

@RestController
@RequestMapping("/eventos")
public class EventoController {

    @Autowired
    private EventoService service;

    @GetMapping
    public List<Evento> listar() {
        return service.listar();
    }

    @GetMapping("/hoje")
    public List<Evento> eventosDeHoje() {
        return service.buscarEventosDeHoje();
    }

    @PostMapping
    public Evento salvar(@RequestBody Evento evento) {
        return service.salvar(evento);
    }
}