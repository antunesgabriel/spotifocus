import Button from "@app/components/button/button.component";
import ErrorMessage from "@app/components/error-message/error-message.component";
import Input from "@app/components/input/input.component";
import LayoutComponent from "@app/components/layout/layout-component";
import Select from "@app/components/select/select.component";
import Spinner from "@app/components/spinner/spinner.component";
import useUserPlaylists from "@app/hooks/useUserPlaylists";

const POMODOROS = [{ value: 2 }, { value: 4 }, { value: 6 }, { value: 8 }];
const MINUTES = [{ value: 25 }, { value: 35 }, { value: 45 }, { value: 55 }];
const BREAKS = [{ value: 3 }, { value: 5 }, { value: 10 }, { value: 20 }];

const WorkspaceContent = () => {
  const {
    data: playlists,
    isLoading: isLoadingPlaylists,
    isError: isErrorPlaylists,
  } = useUserPlaylists();

  if (isLoadingPlaylists) {
    return (
      <div className="h-full flex justify-center items-center flex-col">
        <Spinner size={6} />
      </div>
    );
  }

  if (isErrorPlaylists) {
    return (
      <div className="h-full flex justify-center items-center flex-col">
        <ErrorMessage />
      </div>
    );
  }

  return (
    <div
      id="authentication-modal"
      aria-hidden="true"
      className="flex overflow-y-auto overflow-x-hidden justify-center items-center md:h-full"
    >
      <div className="relative px-4 py-4 w-full max-w-md h-full md:h-auto">
        {/* <!-- Modal content --> */}
        <div className="relative rounded-lg shadow border border-brand-darkgrey">
          <form
            className="px-6 py-4 space-y-7 lg:px-8 sm:py-6 xl:py-8"
            action="#"
          >
            <h3 className="text-xl font-medium text-white">
              Configurar pomodoro
            </h3>
            <div>
              <Input placeholder="Tarefa" required />
            </div>

            <div>
              <Select placeholder="Playlist" required>
                <option className="text-gray-300 text-sm" disabled selected>
                  Playlist
                </option>
                {playlists?.items.map((playlist) => (
                  <option
                    key={playlist.id}
                    className="text-gray-300 text-sm"
                    value={playlist.id}
                  >
                    {playlist.name}
                  </option>
                ))}
              </Select>
            </div>

            <div>
              <Select placeholder="Pomodoro" required>
                <option className="text-gray-300 text-sm" disabled selected>
                  Pomodoros
                </option>
                {POMODOROS.map((pomo, idx) => (
                  <option
                    key={`${idx}_${pomo}`}
                    className="text-gray-300 text-sm"
                    value={pomo.value}
                  >
                    {pomo.value}x
                  </option>
                ))}
              </Select>
            </div>

            <div>
              <Select placeholder="Timer" required>
                <option className="text-gray-300 text-sm" disabled selected>
                  Timer p/ pomodoro
                </option>
                {MINUTES.map((min, idx) => (
                  <option
                    key={`${idx}_${min}_min`}
                    className="text-gray-300 text-sm"
                    value={min.value}
                  >
                    {min.value}min cada pomodoro
                  </option>
                ))}
              </Select>
            </div>

            <div>
              <Select placeholder="Intervalo" required>
                <option className="text-gray-300 text-sm" disabled selected>
                  Intervalo
                </option>
                {BREAKS.map((brk, idx) => (
                  <option
                    key={`${idx}_${brk}_break`}
                    className="text-gray-300 text-sm"
                    value={brk.value}
                  >
                    {brk.value}min
                  </option>
                ))}
              </Select>
            </div>

            <div className="flex justify-center items-center">
              <Button label="Iniciar Pomodoro" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const WorkspacePage = () => {
  return (
    <LayoutComponent title="Worspace" isPrivate>
      <WorkspaceContent />
    </LayoutComponent>
  );
};

export default WorkspacePage;
