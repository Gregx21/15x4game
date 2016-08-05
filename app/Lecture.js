
function Lecture(name, lecturer_name, text, url) {
    this.name = name;
    this.lecturer_name = lecturer_name;
    this.text = text;
    this.url = url;
    this.is_performed = 0;
}

 Lecture.generateLecture = function(old_lecturer) {
 	var lecturer_name = "";
 	if (old_lecturer) {
 		lecturer_name = old_lecturer;
 	} 
 	else {
	 	var first_name = ['Екатерина', 'Оксана', 'Александр', 'Максим', 'Евгений', 'Григорий', 'Николай'];
	 	var second_name = ['Хомяк', 'Морж', 'Бро', 'Зло', 'Добро', 'Сыч', 'Попович'];
	 	lecturer_name = first_name[Math.floor(Math.random() * first_name.length)] + " " + 
	 						second_name[Math.floor(Math.random() * second_name.length)];
 	}


 	var noun = ["Гарри Поттер", "15х4", "Биологическое оружие", "Космическая станция", "Атомные реакторы", "Садоводство", "Дзен", "Зомби", "Наркотики", "ГМО", "Хофштадтер"];
 	var second_noun = ["методы", "фунции", "генератор", "оружие", "открытие", "создание", "искусство", "принципы", "основы", "попытка", "метафизика"];
 	var adjective = ["рационального", "социального", "случайного", "массового", "наименьшего", "сознательного", "принципиального", "нормального", "культурного", "медленного", "качественного"];
 	var supplement = ["мышления", "менеджмента", "значения", "поражения", "котика", "существования", "управления", "генератора", "употребления", "обьяснения", "познания"];

 	var name = noun[Math.floor(Math.random() * noun.length)] + " как " + 
 			second_noun[Math.floor(Math.random() * second_noun.length)] + " " + 
 			adjective[Math.floor(Math.random() * adjective.length)] + " " + 
 			supplement[Math.floor(Math.random() * supplement.length)];

 			//message(name + ". " + lecturer_name);

 	var new_lecture = new Lecture(name, lecturer_name, " ", "https://15x4.org/lecture/random/");
 	if (!old_lecturer) lectures.offered.push(new_lecture);

 	return new_lecture;
 };

 function accept_lecture(lecture_id) {
 	lectures.db.push(lectures.offered[lecture_id]);
 	lectures.offered.splice(lecture_id, 1);
 }

 function skip_lecture(lecture_id) {
 	var lecture = lectures.offered[lecture_id];
 	var name = lecture.lecturer_name;
 	lectures.offered[lecture_id] = Lecture.generateLecture(name);
 }