package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.data.autoconfigure.metrics.DataMetricsProperties.Repository;
import org.springframework.stereotype.Service;

import com.example.demo.model.Modalidade;
import com.example.demo.repository.ModalidadeRepository;

@Service
public class ModalidadeService {

    @Autowired
    private ModalidadeRepository repository;

    public List<Modalidade> listar() {
        return repository.findAll();
    }

    public Modalidade salvar(Modalidade modalidade) {
        return repository.save(modalidade);
    }
    
}