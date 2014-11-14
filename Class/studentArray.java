
public class studentArray {
	student[] studentArray;

	public studentArray() {
		studentArray = null;
	}

	public studentArray(student[] x) {
		studentArray = x;
	}

	public void addStudent(student a) {
		studentArray[studentArray.length] = a;
	}

	public void deleteStudent(String number) {
		student[] result = {};
		int j = 0;
		for (int i = 0; i < studentArray.length; i++) {

			if (studentArray[i].getNumber() != number) {
				result[j] = studentArray[i];
				j++;
			}
		}
		if (result.length != studentArray.length) {
			studentArray = result;
		}

	}

	public student[] getStudents() {
		return studentArray;
	}

	public String toStringStudents() {
		String output = "";
		for (int i = 0; i < studentArray.length; i++) {
			output = output + "Student Name: " + studentArray[i].getName()
					+ " Student Number: " + studentArray[i].getNumber() + "\n";
		}
		return output;
	}
}
