public class student {
	String name;
	String number;
	schedule schedule;
	String[][] skills;
	String[][] grades;
	String[][] profPreference;
	String[][] stuPreference;

	public student() {
		name = "";
		number = "";
		grades = null;
		profPreference = null;
		stuPreference = null;
	}

	public student(String name, String number, String[][] grades) {
		this.name = name;
		this.number = number;
		this.grades = grades;

	}

	public String getName() {
		return name;
	}

	public String getNumber() {
		return number;
	}

	public String[][] getGrades() {
		return grades;
	}

	public String[][] getSkills() {
		return skills;
	}

	public void setSkill(String name, int value) {
		for (int i = 0; i < skills.length; i++) {
			if (skills[i][0] == name) {
				skills[i][1] = Integer.toString(value);
			}

			if ((i == skills.length - 1) && (name != skills[i][0])) {
				skills[i + 1][0] = name;
				skills[i + 1][1] = Integer.toString(value);
			}
		}

	}

	public String[][] getStuPreference() {
		return stuPreference;
	}

	public void setStuPreference(String name, int value) {

		if (value > 0) {
			value = 1;
		}
		if (value < 0) {
			value = -1;
		}
		for (int i = 0; i < stuPreference.length; i++) {
			if (stuPreference[i][0] == name) {
				stuPreference[i][1] = Integer.toString(value);
			}

			if ((i == stuPreference.length - 1)
					&& (name != stuPreference[i][0])) {
				stuPreference[i + 1][0] = name;
				stuPreference[i + 1][1] = Integer.toString(value);
			}
		}
	}

	public String[][] getProfPreference() {
		return profPreference;
	}

	public void setProfPreference(String name, int value) {
		if (value > 0) {
			value = 1;
		}
		if (value < 0) {
			value = -1;
		}
		for (int i = 0; i < profPreference.length; i++) {
			if (profPreference[i][0] == name) {
				profPreference[i][1] = Integer.toString(value);
			}

			if ((i == profPreference.length - 1)
					&& (name != profPreference[i][0])) {
				profPreference[i + 1][0] = name;
				profPreference[i + 1][1] = Integer.toString(value);
			}
		}
	}

}
