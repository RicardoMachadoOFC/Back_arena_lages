package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.Modalidade;

public interface ModalidadeRepository extends JpaRepository<Modalidade, Long> {

}