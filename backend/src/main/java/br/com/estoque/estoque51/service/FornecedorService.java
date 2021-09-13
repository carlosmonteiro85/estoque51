package br.com.estoque.estoque51.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.estoque.estoque51.model.Fornecedor;
import br.com.estoque.estoque51.repository.FornecedorRepository;

@Service
public class FornecedorService {

	private FornecedorRepository fornecedorRepository;
	
	public FornecedorService(@Autowired FornecedorRepository fornecedorRepository) {
		this.fornecedorRepository = fornecedorRepository;
	}

	public void save(Fornecedor fornecedor) {
		fornecedorRepository.save(fornecedor);
	}

	public Fornecedor loadById(Integer id) {
		return fornecedorRepository.findById(id).orElse(null);
	}

	public List<Fornecedor> findAll() {
		return fornecedorRepository.findAll();
	}

	public void delete(Fornecedor fornecedor) {
		fornecedorRepository.delete(fornecedor);
	}

}
