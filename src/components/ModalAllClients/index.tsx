import { useAuth } from "@/context/AuthContext";
import { useModal } from "@/context/ModalContext";
import { ClientCard } from "../ClientCard";
import { ModalAllUsers } from "../ModalContainer";

export const ModalAllClients = () => {
  const { setIsModalAllUsersOpen } = useModal();
  const { allClientObject } = useAuth();

  return (
    <ModalAllUsers setIsModOpen={setIsModalAllUsersOpen}>
      <ul>
        {allClientObject?.clients.length &&
          allClientObject.clients.map((client) => {
            return (
              <ClientCard
                key={client.id}
                fullName={client.fullName}
                email={client.email}
                phone={client.phone}
              ></ClientCard>
            );
          })}
      </ul>
      <div className="pageButtons">
        <button>Previous Page</button>
        <button>Next Page</button>
      </div>
    </ModalAllUsers>
  );
};
