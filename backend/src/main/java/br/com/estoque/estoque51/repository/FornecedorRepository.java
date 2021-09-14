package br.com.estoque.estoque51.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.com.estoque.estoque51.model.Fornecedor;

public interface FornecedorRepository extends JpaRepository<Fornecedor, Integer>{
	
	@Query("select f from Fornecedor f where f.cnpj = :cnpj")
	Fornecedor findAllByCnpj(@Param("cnpj") String cnpj);
}
