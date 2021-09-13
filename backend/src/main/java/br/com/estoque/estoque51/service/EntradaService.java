//package br.com.estoque.estoque51.service;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import br.com.estoque.estoque51.model.Entrada;
//import br.com.estoque.estoque51.repository.EntradaRepository;
//
//@Service
//public class EntradaService {
//
//	private EntradaRepository entradaRepository;
//	
//	public EntradaService(@Autowired EntradaRepository entradaRepository) {
//		this.entradaRepository = entradaRepository;
//	}
//
//	public void save(Entrada entrada) {
//		entradaRepository.save(entrada);
//	}
//
//	public Entrada loadById(Integer id) {
//		return entradaRepository.findById(id).orElse(null);
//	}
//
//	public List<Entrada> findAll() {
//		return entradaRepository.findAll();
//	}
//
//	public void delete(Entrada entrada) {
//		entradaRepository.delete(entrada);
//	}
//
//}
