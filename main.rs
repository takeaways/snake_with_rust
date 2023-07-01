fn main() {
 let mut message = String::from("Hello");
 println!("{}",message);
 
 let message_2 = &mut message;

  println!("{message_2}");
}
