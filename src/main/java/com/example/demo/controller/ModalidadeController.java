package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Modalidade;
import com.example.demo.service.ModalidadeService;

@RestController
@RequestMapping("/modalidades")
public class ModalidadeController {

    @Autowired
    private ModalidadeService service;

    @GetMapping
    public List<Modalidade> listar() {
        return service.listar();
    }

    @PostMapping
    public Modalidade salvar(@RequestBody Modalidade modalidade) {
        return service.salvar(modalidade);
    }
}