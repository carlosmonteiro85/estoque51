package br.com.estoque.estoque51.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.estoque.estoque51.dto.response.MessageResponseDTO;
import br.com.estoque.estoque51.exceptions.EntradaNotFoundException;
import br.com.estoque.estoque51.model.Entrada;
import br.com.estoque.estoque51.repository.EntradaRepository;

@Service
public class EntradaService {

	private EntradaRepository entradaRepository;
	
	public EntradaService(@Autowired EntradaRepository entradaRepository) {
		this.entradaRepository = entradaRepository;
	}

	public MessageResponseDTO save(Entrada entrada) {
		entradaRepository.save(entrada);
		return MessageResponseDTO.createMessageResponse(entrada.getId(), "Entrada efetuada com sucesso!");
	}

	public Entrada loadById(Integer id) {
		return entradaRepository.findById(id).orElse(null);
	}

	public List<Entrada> findAll() {
		return entradaRepository.findAll();
	}

	public MessageResponseDTO delete(Integer id) {
		entradaRepository.deleteById(id);
		return MessageResponseDTO.createMessageResponse(id, "Entrada deletado com sucesso!");
	}
	
	public MessageResponseDTO updateById(Entrada entrada) throws EntradaNotFoundException {
		verifyIfExists(entrada.getId());
		
		if(verifyIfExists(entrada.getId()) != null) {
			entradaRepository.save(entrada);
			return MessageResponseDTO.createMessageResponse(entrada.getId(), " Entrada Atualizado com sucesso! ");			
		}
		
		return MessageResponseDTO.createMessageResponse(entrada.getId(), " Entrada informado não existe! ");
	}
	
	private Entrada verifyIfExists(Integer id) {
		return entradaRepository.findById(id).orElse(null);
	}

}
