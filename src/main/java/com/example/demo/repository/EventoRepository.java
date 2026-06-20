package com.example.demo.repository;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Evento;

public interface EventoRepository extends JpaRepository<Evento, Long> {

    List<Evento> findByDataHoraBetween(LocalDateTime inicio, LocalDateTime fim);

}