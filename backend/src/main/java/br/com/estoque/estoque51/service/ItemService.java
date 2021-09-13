//package br.com.estoque.estoque51.service;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import br.com.estoque.estoque51.model.Item;
//import br.com.estoque.estoque51.repository.ItemRepository;
//
//@Service
//public class ItemService {
//
//	private ItemRepository itemRepository;
//	
//	public ItemService(@Autowired ItemRepository itemRepository) {
//		this.itemRepository = itemRepository;
//	}
//
//	public void save(Item item) {
//		itemRepository.save(item);
//	}
//
//	public Item loadById(Integer id) {
//		return itemRepository.findById(id).orElse(null);
//	}
//
//	public List<Item> findAll() {
//		return itemRepository.findAll();
//	}
//
//	public void delete(Item item) {
//		itemRepository.delete(item);
//	}
//
//}
