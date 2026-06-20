package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Local;
import com.example.demo.service.LocalService;

@RestController
@RequestMapping("/locais")
public class LocalController {

    @Autowired
    private LocalService service;

    @GetMapping
    public List<Local> listar() {
        return service.listar();
    }

    @PostMapping
    public Local salvar(@RequestBody Local local) {
        return service.salvar(local);
    }
}