package com.example.demo.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Evento;
import com.example.demo.repository.EventoRepository;

@Service
public class EventoService {

    @Autowired
    private EventoRepository repository;

    public List<Evento> listar() {
        return repository.findAll();
    }

    public Evento salvar(Evento evento) {
        return repository.save(evento);
    }

    public List<Evento> buscarEventosDeHoje() {

        LocalDateTime inicio = LocalDate.now().atStartOfDay();
        LocalDateTime fim = LocalDate.now().atTime(23, 59, 59);
        
        return repository.findByDataHoraBetween(inicio, fim);
    }
}