package com.torcidaplus.backend.repository;

import com.torcidaplus.backend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
