package br.com.estoque.estoque51.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.estoque.estoque51.dto.response.MessageResponseDTO;
import br.com.estoque.estoque51.exceptions.FornecedorNotFoundException;
import br.com.estoque.estoque51.model.Fornecedor;
import br.com.estoque.estoque51.repository.FornecedorRepository;

@Service
public class FornecedorService {

	private FornecedorRepository fornecedorRepository;

	public FornecedorService(@Autowired FornecedorRepository fornecedorRepository) {
		this.fornecedorRepository = fornecedorRepository;
	}

	// Salvar
	public MessageResponseDTO save(Fornecedor fornecedor) {

		// verificação se o cnpj ja esta cadastrado
		Fornecedor cnpj = findByCnpj(fornecedor.getCnpj());
		if (cnpj != null) {
			return createMessageResponse(fornecedor.getId(), " CNPJ ja cadastrado ");
		}
		fornecedorRepository.save(fornecedor);
		return createMessageResponse(fornecedor.getId(), " Fornecedor Criado com sucesso ");
	}

	// Atualizar
	public MessageResponseDTO updateById(Fornecedor fornecedor) throws FornecedorNotFoundException {
		verifyIfExists(fornecedor.getId());
		
		if(verifyIfExists(fornecedor.getId()) != null) {
			fornecedorRepository.save(fornecedor);
			return createMessageResponse(fornecedor.getId(), " Fornecedor Atualizado com sucesso! ");			
		}
		
		return createMessageResponse(fornecedor.getId(), " Fornecedor informado não existe! ");
	}

	// Listar todos
	public List<Fornecedor> findAll() {
		return fornecedorRepository.findAll();
	}

	// delete
	public MessageResponseDTO delete(Integer id) {
		fornecedorRepository.deleteById(id);
		return createMessageResponse(id, " Fornecedor deletado com sucesso! ");
	}

	// Verifica se existe a entidade
	private Fornecedor verifyIfExists(Integer id) {
		return fornecedorRepository.findById(id).orElse(null);
	}

	private MessageResponseDTO createMessageResponse(Integer id, String message) {
		return MessageResponseDTO.builder().message(message + id);
	}

	public Fornecedor findByCnpj(String cnpj) {
		return fornecedorRepository.findAllByCnpj(cnpj);
	}

	public Fornecedor findById(Integer id) {
		return fornecedorRepository.findById(id).orElse(null);
	}

}
