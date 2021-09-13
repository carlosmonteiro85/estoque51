package br.com.estoque.estoque51.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.estoque.estoque51.model.Fornecedor;

public interface FornecedorRepository extends JpaRepository<Fornecedor, Integer>{
}
