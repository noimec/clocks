import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTimezones } from "../../entities/clock/lib/actions"; //TODO: imports -> features
import { AppDispatch, RootState } from "../../entities/clock/lib/actions/types";

export const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { timezones, loading, clocks } = useSelector((state: RootState) => ({
    timezones: state.timezones.timezones,
    loading: state.loading.loading,
    clocks: state.clocks.clocks,
  }));

  useEffect(() => {
    dispatch(fetchTimezones());
  }, [dispatch]);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      <h2>Города:</h2>
      <ul>
        {Object.keys(timezones).map((city) => (
          <li key={city}>
            {city}: UTC{timezones[city]}
          </li>
        ))}
      </ul>
    </div>
  );
};
