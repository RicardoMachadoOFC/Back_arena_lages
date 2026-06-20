package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Local;
import com.example.demo.repository.LocalRepository;

@Service
public class LocalService {

    @Autowired
    private LocalRepository repository;

    public List<Local> listar() {
        return repository.findAll();
    }

    public Local salvar(Local local) {
        return repository.save(local);
    }
}