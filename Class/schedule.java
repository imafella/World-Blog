import java.util.Arrays;

public class schedule {
	boolean[][] schedule;

	public schedule() {
		schedule = new boolean[7][24];
		Arrays.fill(schedule, Boolean.TRUE);
	}

	public String toString() {
		String outGoing = "";
		String[] week = { "Monday", "Tuesday", "Wednesday", "Thursday",
				"Friday", "Saturday", "Sunday" };
		for (int i = 0; i < 7; i++) {
			outGoing = outGoing + " \n" + week[i];
			for (int j = 0; j < 24; j++) {
				outGoing = outGoing + " " + (j * 100) + " " + schedule[i][j];
			}

		}
		return outGoing;
	}

	public schedule mergeSchedules(schedule a, schedule b) {
		schedule merged = new schedule();
		for (int i = 0; i < 7; i++) {
			for (int j = 0; j < 24; j++) {
				if ((a.schedule[i][j] == false) || (b.schedule[i][j] == false)) {
					merged.schedule[i][j] = false;
				}
				if ((a.schedule[i][j] == true) && (b.schedule[i][j] == true)) {
					merged.schedule[i][j] = true;
				}
			}
		}
		return merged;
	}

	public String getFreeTime(schedule a) {
		String outGoing = "Free Time: ";
		String[] week = { "Monday", "Tuesday", "Wednesday", "Thursday",
				"Friday", "Saturday", "Sunday" };
		for (int i = 0; i < 7; i++) {
			outGoing = outGoing + " \n" + week[i];
			for (int j = 0; j < 24; j++) {
				if (a.schedule[i][j] == true) {
					outGoing = outGoing + " " + (j * 100) + " "
							+ schedule[i][j];
				}
			}

		}
		return outGoing;

	}

	public String getBusyTime(schedule a) {
		String outGoing = "Busy Time: ";
		String[] week = { "Monday", "Tuesday", "Wednesday", "Thursday",
				"Friday", "Saturday", "Sunday" };
		for (int i = 0; i < 7; i++) {
			outGoing = outGoing + " \n" + week[i];
			for (int j = 0; j < 24; j++) {
				if (a.schedule[i][j] == false) {
					outGoing = outGoing + " " + (j * 100) + " "
							+ schedule[i][j];
				}
			}

		}
		return outGoing;

	}

	public schedule editSchedule(schedule a, String day, int start, int end) {
		day = day.toLowerCase();
		String[] week = { "Monday", "Tuesday", "Wednesday", "Thursday",
				"Friday", "Saturday", "Sunday" };
		for (int i = 0; i < 7; i++) {
			if (day == week[i].toLowerCase()) {
				for (int j = start; j < end; j++) {
					a.schedule[i][j] = !a.schedule[i][j];
				}
			}
		}
		return a;
	}

}
