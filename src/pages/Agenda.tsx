import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

export const Agenda = () => {
    return (
        <div>
            <section>
                <h2>Agenda</h2>
                <p>Hieronder is het schema te zien van opkomende evenementen:</p>
                <div>

                    <FullCalendar
                        plugins={[dayGridPlugin]}
                        initialView='dayGridWeek'
                        height='auto'
                        events={[
                            {
                                title: 'Jongdierendag', start: '2026-09-09'
                            }
                        ]}
                    />
                </div>
            </section>
        </ div>
    );
}