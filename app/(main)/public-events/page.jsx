import { getAllPublicEvents } from "@/actions/events";
import EventCard from "@/components/event-card";
import { UserIcon, MailIcon } from "lucide-react";

export default async function PublicEventsPage() {
  const events = await getAllPublicEvents();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">All Public Events</h1>
      {events.length === 0 ? (
        <p className="text-muted-foreground">No public events available right now.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div key={event.id} className="flex flex-col gap-2">
              <EventCard
                event={event}
                username={event.user.username}
                isPublic
              />
              <div className="flex items-center gap-2 text-sm text-muted-foreground px-2 py-1">
                <UserIcon className="w-4 h-4" />
                <span>
                  <strong>{event.user.name}</strong>
                  {event.user.username && (
                    <span className="ml-1 text-xs text-gray-500">
                      (@{event.user.username})
                    </span>
                  )}
                  {event.user.email && (
                    <>
                      {" "}
                      <MailIcon className="w-4 h-4 inline ml-2" />
                      <span className="ml-1">{event.user.email}</span>
                    </>
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}