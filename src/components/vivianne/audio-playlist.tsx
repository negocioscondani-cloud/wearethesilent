'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { 
  Play, 
  Pause, 
  Lock, 
  Headphones, 
  ExternalLink, 
  Volume2, 
  VolumeX, 
  RotateCcw, 
  RotateCw, 
  Check, 
  Sparkles, 
  Music, 
  ListMusic, 
  Search, 
  ArrowRight,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';
import { 
  AudioTrack, 
  WOLSKI_THEMES, 
  ALL_AUDIO_TRACKS, 
  SAMPLE_AUDIO_TRACKS 
} from '@/data/vivianne-audios';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const GUMROAD_CLUB_URL = 'https://thesilentstudiomk.gumroad.com/l/ltfbhx';

export default function AudioPlaylist() {
  const [selectedTheme, setSelectedTheme] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTrack, setActiveTrack] = useState<AudioTrack | null>(SAMPLE_AUDIO_TRACKS[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [lockedModalTrack, setLockedModalTrack] = useState<AudioTrack | null>(null);
  const [isPlaylistExpanded, setIsPlaylistExpanded] = useState<boolean>(true);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Filtered tracks
  const filteredTracks = ALL_AUDIO_TRACKS.filter(track => {
    const matchesTheme = selectedTheme === 'all' || track.themeNum === selectedTheme;
    const matchesQuery = 
      track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.themeTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTheme && matchesQuery;
  });

  // Handle play/pause
  const handleTogglePlay = (track: AudioTrack) => {
    if (!track.audioUrl) {
      setLockedModalTrack(track);
      return;
    }

    if (activeTrack?.id === track.id) {
      if (isPlaying) {
        audioRef.current?.pause();
        setIsPlaying(false);
      } else {
        audioRef.current?.play().catch(e => console.error(e));
        setIsPlaying(true);
      }
    } else {
      setActiveTrack(track);
      setIsPlaying(true);
      if (audioRef.current) {
        audioRef.current.src = track.audioUrl;
        audioRef.current.load();
        audioRef.current.play().catch(e => console.error(e));
      }
    }
  };

  // Skip 15s forward / back
  const handleSkip = (seconds: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(0, Math.min(duration, audioRef.current.currentTime + seconds));
    }
  };

  // Seek bar
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  // Format seconds to mm:ss
  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return '00:00';
    const mins = Math.floor(secs / 60);
    const remainingSecs = Math.floor(secs % 60);
    return `${mins.toString().padStart(2, '0')}:${remainingSecs.toString().padStart(2, '0')}`;
  };

  // Audio element event listeners
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => setDuration(audio.duration);
    const onEnded = () => setIsPlaying(false);
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('ended', onEnded);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);

    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('ended', onEnded);
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
    };
  }, []);

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div id="fonoteca" className="space-y-8">
      {/* Hidden Native Audio Element */}
      <audio
        ref={audioRef}
        src={activeTrack?.audioUrl || SAMPLE_AUDIO_TRACKS[0].audioUrl}
        preload="metadata"
      />

      {/* ============================================================== */}
      {/* 1. TOP CARDS: 2 SAMPLE AUDIOS + THIRD ACTION BUTTON            */}
      {/* ============================================================== */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#B08D57] font-semibold block">
              MUESTRAS GRATUITAS DISPONIBLES
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#2B1D14] font-normal tracking-tight mt-1">
              Escucha la voz de Vivienne
            </h3>
          </div>
          <p className="font-serif italic text-xs sm:text-sm text-[#7C6E65] max-w-md">
            Dos lecciones completas del Tema 1 sin costo. Pulsa reproducir para comprobar el tono y el rigor.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 pt-1">
          {/* SAMPLE AUDIO CARD 1 */}
          <div 
            className={`p-5 rounded-sm border transition-all duration-300 relative flex flex-col justify-between ${
              activeTrack?.id === 'emp-01' 
                ? 'bg-[#FAF5EC] border-[#6B1F2A] shadow-md ring-1 ring-[#6B1F2A]/30' 
                : 'bg-[#F7F1E6] border-[#B08D57]/40 hover:border-[#B08D57]'
            }`}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#6B1F2A] font-bold bg-[#6B1F2A]/10 px-2 py-0.5 rounded-xs border border-[#6B1F2A]/20">
                  AUDIO MUESTRA 01
                </span>
                <span className="font-mono text-[10px] text-[#7C6E65]">
                  Tema 1 · Empoderamiento
                </span>
              </div>

              <div>
                <h4 className="font-serif text-lg font-medium text-[#2B1D14] leading-snug">
                  Nadie te va a dar permiso
                </h4>
                <p className="font-serif italic text-xs text-[#7C6E65] mt-1 leading-relaxed line-clamp-2">
                  La espera por la aprobación ajena es sumisión. Empieza antes de que te den la venia.
                </p>
              </div>
            </div>

            <div className="pt-4 mt-2 border-t border-[#B08D57]/20 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => handleTogglePlay(SAMPLE_AUDIO_TRACKS[0])}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#6B1F2A] hover:bg-[#2B1D14] text-[#F7F1E6] font-mono text-[10.5px] uppercase tracking-wider rounded-xs transition shadow-xs cursor-pointer"
              >
                {activeTrack?.id === 'emp-01' && isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5 fill-current" />
                    <span>Pausar</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Reproducir</span>
                  </>
                )}
              </button>

              <span className="font-mono text-[11px] text-[#6B1F2A] font-medium">
                {activeTrack?.id === 'emp-01' ? `${formatTime(currentTime)} / ${formatTime(duration)}` : '03:15 min'}
              </span>
            </div>
          </div>

          {/* SAMPLE AUDIO CARD 2 */}
          <div 
            className={`p-5 rounded-sm border transition-all duration-300 relative flex flex-col justify-between ${
              activeTrack?.id === 'emp-02' 
                ? 'bg-[#FAF5EC] border-[#6B1F2A] shadow-md ring-1 ring-[#6B1F2A]/30' 
                : 'bg-[#F7F1E6] border-[#B08D57]/40 hover:border-[#B08D57]'
            }`}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#6B1F2A] font-bold bg-[#6B1F2A]/10 px-2 py-0.5 rounded-xs border border-[#6B1F2A]/20">
                  AUDIO MUESTRA 02
                </span>
                <span className="font-mono text-[10px] text-[#7C6E65]">
                  Tema 1 · Empoderamiento
                </span>
              </div>

              <div>
                <h4 className="font-serif text-lg font-medium text-[#2B1D14] leading-snug">
                  El no sin explicación
                </h4>
                <p className="font-serif italic text-xs text-[#7C6E65] mt-1 leading-relaxed line-clamp-2">
                  Una respuesta completa no necesita justificaciones. Aprender a decir que no con sosiego.
                </p>
              </div>
            </div>

            <div className="pt-4 mt-2 border-t border-[#B08D57]/20 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => handleTogglePlay(SAMPLE_AUDIO_TRACKS[1])}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#6B1F2A] hover:bg-[#2B1D14] text-[#F7F1E6] font-mono text-[10.5px] uppercase tracking-wider rounded-xs transition shadow-xs cursor-pointer"
              >
                {activeTrack?.id === 'emp-02' && isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5 fill-current" />
                    <span>Pausar</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Reproducir</span>
                  </>
                )}
              </button>

              <span className="font-mono text-[11px] text-[#6B1F2A] font-medium">
                {activeTrack?.id === 'emp-02' ? `${formatTime(currentTime)} / ${formatTime(duration)}` : '03:40 min'}
              </span>
            </div>
          </div>

          {/* THIRD ACTION CARD: EXPLORAR TODA LA LISTA */}
          <div className="p-5 rounded-sm border border-[#B08D57]/60 bg-gradient-to-br from-[#FAF5EC] to-[#E8DFD0] flex flex-col justify-between shadow-xs">
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-[#B08D57]">
                <ListMusic className="w-4 h-4" />
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] font-bold">
                  CATÁLOGO ÍNTEGRO
                </span>
              </div>
              <h4 className="font-serif text-lg font-medium text-[#2B1D14]">
                Los 7 Temas · 34 Audios
              </h4>
              <p className="text-xs text-[#7C6E65] leading-relaxed">
                Empoderamiento, Finanzas, Seguridad, Contenido, Escritura, Arte y Moda 2026.
              </p>
            </div>

            <div className="pt-3">
              <a
                href="#playlist-tabla"
                onClick={() => setIsPlaylistExpanded(true)}
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-[#2B1D14] hover:bg-[#6B1F2A] text-[#F7F1E6] font-mono text-xs uppercase tracking-[0.15em] rounded-xs transition duration-300 shadow-sm"
              >
                <span>Explorar Playlist</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#B08D57]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. SPOTIFY-STYLE EDITORIAL PLAYLIST                           */}
      {/* ============================================================== */}
      <div 
        id="playlist-tabla" 
        className="border border-[#B08D57]/40 bg-[#FAF5EC] rounded-sm overflow-hidden shadow-md"
      >
        {/* Playlist Hero Banner (Spotify Inspired with Vivienne Aesthetic) */}
        <div className="p-6 sm:p-8 bg-gradient-to-b from-[#E8DFD0] to-[#FAF5EC] border-b border-[#B08D57]/30 flex flex-col md:flex-row items-center gap-6">
          {/* Cover Art */}
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-sm overflow-hidden shadow-xl border border-[#B08D57]/40 shrink-0 bg-[#2B1D14]">
            <Image
              src="/images/vivianne-wolski-hero.jpg"
              alt="Vivienne Wolski Fonoteca"
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 144px, 176px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white font-mono text-[9px] uppercase tracking-wider">
              <span>Wolski Club</span>
              <span>34 Tracks</span>
            </div>
          </div>

          {/* Playlist Metadata */}
          <div className="space-y-2.5 text-center md:text-left flex-1">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#6B1F2A] font-bold bg-[#6B1F2A]/10 px-2.5 py-0.5 rounded-full border border-[#6B1F2A]/20">
                PLAYLIST OFICIAL
              </span>
              <span className="text-[#B08D57] hidden sm:inline">·</span>
              <span className="font-mono text-[10px] text-[#7C6E65]">
                Círculo Privado de Vivienne
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl text-[#2B1D14] font-light tracking-tight leading-tight">
              La Fonoteca del Wolski Club
            </h2>

            <p className="font-serif italic text-xs sm:text-sm text-[#7C6E65] max-w-xl leading-relaxed">
              34 formaciones en audio grabadas sin prisa. Una escuela de vida, dinero y estética para escuchar cada semana en sus auriculares.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
              <button
                type="button"
                onClick={() => handleTogglePlay(SAMPLE_AUDIO_TRACKS[0])}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#6B1F2A] hover:bg-[#2B1D14] text-[#F7F1E6] font-mono text-xs uppercase tracking-wider rounded-full transition shadow-sm cursor-pointer"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5 fill-current" />
                    <span>Pausar Audio</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Reproducir Muestra</span>
                  </>
                )}
              </button>

              <a
                href={GUMROAD_CLUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 border border-[#B08D57] bg-[#FAF5EC] hover:bg-white text-[#2B1D14] hover:text-[#6B1F2A] font-mono text-xs uppercase tracking-wider rounded-full transition shadow-xs"
              >
                <span>Desbloquear Todo ($9 USD)</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B08D57]" />
              </a>
            </div>
          </div>
        </div>

        {/* Filter Navigation & Search (Pills) */}
        <div className="p-4 sm:p-6 border-b border-[#B08D57]/20 space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#7C6E65]" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Buscar capítulo o tema..."
                className="w-full pl-9 pr-3 py-1.5 bg-[#F7F1E6] border border-[#B08D57]/40 rounded-full font-serif text-xs text-[#2B1D14] placeholder:text-[#7C6E65]/70 focus:outline-none focus:border-[#6B1F2A]"
              />
            </div>

            <div className="font-mono text-[10px] text-[#7C6E65] text-right">
              Mostrando <span className="font-bold text-[#6B1F2A]">{filteredTracks.length}</span> de 34 capítulos
            </div>
          </div>

          {/* Category Theme Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-thin">
            <button
              type="button"
              onClick={() => setSelectedTheme('all')}
              className={`font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full border transition whitespace-nowrap cursor-pointer ${
                selectedTheme === 'all'
                  ? 'bg-[#2B1D14] border-[#2B1D14] text-[#F7F1E6] font-semibold'
                  : 'bg-[#F7F1E6] border-[#B08D57]/30 text-[#7C6E65] hover:text-[#2B1D14] hover:border-[#B08D57]'
              }`}
            >
              Todos (34)
            </button>
            {WOLSKI_THEMES.map(theme => (
              <button
                key={theme.num}
                type="button"
                onClick={() => setSelectedTheme(theme.num)}
                className={`font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full border transition whitespace-nowrap cursor-pointer ${
                  selectedTheme === theme.num
                    ? 'bg-[#6B1F2A] border-[#6B1F2A] text-[#F7F1E6] font-semibold'
                    : 'bg-[#F7F1E6] border-[#B08D57]/30 text-[#7C6E65] hover:text-[#2B1D14] hover:border-[#B08D57]'
                }`}
              >
                {theme.num}. {theme.title} ({theme.tracks.length})
              </button>
            ))}
          </div>
        </div>

        {/* Tracks Table (Spotify Layout) */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#B08D57]/20 font-mono text-[9px] uppercase tracking-[0.2em] text-[#7C6E65] bg-[#E8DFD0]/40">
                <th className="py-3 px-4 w-12 text-center">#</th>
                <th className="py-3 px-4">Capítulo</th>
                <th className="py-3 px-4 hidden sm:table-cell">Tema / Serie</th>
                <th className="py-3 px-4 hidden md:table-cell">Duración</th>
                <th className="py-3 px-4 text-right">Acceso</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#B08D57]/15">
              {filteredTracks.map(track => {
                const isCurrent = activeTrack?.id === track.id;
                return (
                  <tr
                    key={track.id}
                    onClick={() => handleTogglePlay(track)}
                    className={`group transition duration-200 cursor-pointer ${
                      isCurrent
                        ? 'bg-[#FAF5EC] font-medium'
                        : 'hover:bg-[#FAF5EC]/70 bg-transparent'
                    }`}
                  >
                    {/* Track Number / Play Indicator */}
                    <td className="py-3.5 px-4 text-center font-mono text-xs">
                      {isCurrent && isPlaying ? (
                        <div className="flex items-center justify-center gap-0.5 text-[#6B1F2A]">
                          <span className="w-0.5 h-3.5 bg-[#6B1F2A] animate-pulse" />
                          <span className="w-0.5 h-4 bg-[#6B1F2A] animate-pulse delay-75" />
                          <span className="w-0.5 h-2.5 bg-[#6B1F2A] animate-pulse delay-150" />
                        </div>
                      ) : (
                        <span className="text-[#7C6E65] group-hover:text-[#6B1F2A]">
                          {track.globalNum.toString().padStart(2, '0')}
                        </span>
                      )}
                    </td>

                    {/* Title & Desc */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleTogglePlay(track);
                          }}
                          className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition ${
                            track.isSample
                              ? isCurrent && isPlaying
                                ? 'bg-[#6B1F2A] text-white'
                                : 'bg-[#E8DFD0] group-hover:bg-[#6B1F2A] text-[#2B1D14] group-hover:text-white'
                              : 'bg-[#FAF5EC] border border-[#B08D57]/40 text-[#B08D57] group-hover:border-[#6B1F2A] group-hover:text-[#6B1F2A]'
                          }`}
                        >
                          {track.isSample ? (
                            isCurrent && isPlaying ? (
                              <Pause className="w-3.5 h-3.5 fill-current" />
                            ) : (
                              <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                            )
                          ) : (
                            <Lock className="w-3 h-3" />
                          )}
                        </button>

                        <div>
                          <div className={`font-serif text-sm sm:text-base ${
                            isCurrent ? 'text-[#6B1F2A] font-semibold' : 'text-[#2B1D14] group-hover:text-[#6B1F2A]'
                          }`}>
                            {track.title}
                          </div>
                          <div className="font-serif italic text-[11px] text-[#7C6E65] line-clamp-1 max-w-md">
                            {track.description}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Theme / Album */}
                    <td className="py-3.5 px-4 hidden sm:table-cell font-mono text-[10px] text-[#7C6E65]">
                      {track.themeNum}. {track.themeTitle}
                    </td>

                    {/* Duration */}
                    <td className="py-3.5 px-4 hidden md:table-cell font-mono text-xs text-[#7C6E65]">
                      {track.duration || '03:45'}
                    </td>

                    {/* Access Action Badge / Button */}
                    <td className="py-3.5 px-4 text-right">
                      {track.isSample ? (
                        <span className="inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-[#6B1F2A] font-bold bg-[#6B1F2A]/10 border border-[#6B1F2A]/20 px-2.5 py-1 rounded-full">
                          <Sparkles className="w-2.5 h-2.5 text-[#B08D57]" />
                          <span>Muestra Libre</span>
                        </span>
                      ) : (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setLockedModalTrack(track);
                          }}
                          className="inline-flex items-center gap-1.5 font-mono text-[9.5px] uppercase tracking-wider text-[#7C6E65] hover:text-[#6B1F2A] border border-[#B08D57]/30 hover:border-[#6B1F2A] px-2.5 py-1 rounded-full transition cursor-pointer"
                        >
                          <Lock className="w-2.5 h-2.5 text-[#B08D57]" />
                          <span>Desbloquear</span>
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Bottom Banner of Playlist Table */}
        <div className="p-5 bg-[#FAF5EC] border-t border-[#B08D57]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left space-y-0.5">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#B08D57] font-semibold block">
              COLECCIÓN COMPLETA DE 34 AUDIOS
            </span>
            <p className="text-xs text-[#2B1D14]">
              Acceda a todos los audios, futuras lecciones y grupo privado por un único pago de <b>$9 USD</b>.
            </p>
          </div>

          <a
            href={GUMROAD_CLUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-2.5 bg-[#6B1F2A] hover:bg-[#2B1D14] text-[#F7F1E6] font-mono text-xs uppercase tracking-[0.18em] rounded-sm transition shadow-sm"
          >
            Unirme al Wolski Club ($9 USD)
          </a>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 3. PERSISTENT AUDIO PLAYER CONTROLLER BAR                      */}
      {/* ============================================================== */}
      {activeTrack && (
        <div className="bg-[#FAF5EC] border-2 border-[#B08D57]/60 rounded-sm p-4 sm:p-5 shadow-lg space-y-3">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            {/* Current Track Info */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-[#6B1F2A] text-white flex items-center justify-center shrink-0 font-serif font-bold text-sm shadow-xs">
                {activeTrack.globalNum.toString().padStart(2, '0')}
              </div>
              <div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#B08D57] font-semibold block">
                  {activeTrack.themeNum}. {activeTrack.themeTitle}
                </span>
                <h5 className="font-serif text-base text-[#2B1D14] font-medium leading-none mt-0.5">
                  {activeTrack.title}
                </h5>
              </div>
            </div>

            {/* Playback Controls */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-end">
              <button
                type="button"
                onClick={() => handleSkip(-15)}
                className="p-1.5 text-[#7C6E65] hover:text-[#2B1D14] transition"
                title="Retroceder 15s"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => handleTogglePlay(activeTrack)}
                className="w-10 h-10 rounded-full bg-[#6B1F2A] hover:bg-[#2B1D14] text-white flex items-center justify-center transition shadow-md cursor-pointer"
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 fill-current" />
                ) : (
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                )}
              </button>

              <button
                type="button"
                onClick={() => handleSkip(15)}
                className="p-1.5 text-[#7C6E65] hover:text-[#2B1D14] transition"
                title="Avanzar 15s"
              >
                <RotateCw className="w-4 h-4" />
              </button>

              <span className="text-[#B08D57]">|</span>

              <button
                type="button"
                onClick={() => {
                  if (audioRef.current) {
                    audioRef.current.muted = !isMuted;
                    setIsMuted(!isMuted);
                  }
                }}
                className="p-1.5 text-[#7C6E65] hover:text-[#2B1D14] transition"
                title={isMuted ? 'Activar sonido' : 'Silenciar'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Progress Slider */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-[#7C6E65] w-9 text-left">
                {formatTime(currentTime)}
              </span>
              <input
                type="range"
                min="0"
                max={duration || 100}
                value={currentTime}
                onChange={handleSeek}
                className="flex-1 h-1.5 bg-[#E8DFD0] rounded-lg appearance-none cursor-pointer accent-[#6B1F2A]"
              />
              <span className="font-mono text-[10px] text-[#7C6E65] w-9 text-right">
                {formatTime(duration)}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* 4. MODAL: UNLOCK LOCKED TRACK / JOIN WOLSKI CLUB               */}
      {/* ============================================================== */}
      <Dialog open={!!lockedModalTrack} onOpenChange={() => setLockedModalTrack(null)}>
        <DialogContent className="max-w-md bg-[#F7F1E6] border border-[#B08D57] text-[#2B1D14] p-6 rounded-sm shadow-2xl">
          <DialogHeader className="text-left space-y-2">
            <div className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.25em] text-[#B08D57] font-semibold border border-[#B08D57]/30 bg-[#FAF5EC] px-2.5 py-1 rounded-xs w-fit">
              <Headphones className="w-3 h-3 text-[#6B1F2A]" />
              <span>CÍRCULO PRIVADO · WOLSKI CLUB</span>
            </div>

            <DialogTitle className="font-serif text-2xl text-[#2B1D14] font-normal leading-snug">
              Desbloquear Colección Completa
            </DialogTitle>

            <DialogDescription className="font-serif italic text-xs sm:text-sm text-[#7C6E65] leading-relaxed">
              El capítulo <strong className="text-[#6B1F2A] font-semibold">&ldquo;{lockedModalTrack?.title}&rdquo;</strong> forma parte de la serie exclusiva de formación en audios de Vivienne.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 pt-2">
            {/* Chapter Info Preview */}
            <div className="p-3.5 bg-[#FAF5EC] border border-[#B08D57]/30 rounded-xs space-y-1">
              <div className="flex items-center justify-between font-mono text-[9px] text-[#7C6E65] uppercase tracking-wider">
                <span>Tema {lockedModalTrack?.themeNum}: {lockedModalTrack?.themeTitle}</span>
                <span>Track {lockedModalTrack?.globalNum} de 34</span>
              </div>
              <p className="text-xs text-[#2B1D14] leading-relaxed">
                {lockedModalTrack?.description}
              </p>
            </div>

            {/* Offer Callout */}
            <div className="p-4 bg-gradient-to-br from-[#FAF5EC] to-[#E8DFD0] border border-[#6B1F2A]/30 rounded-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-serif font-bold text-sm text-[#6B1F2A]">
                  Membresía Vitalicia Wolski Club
                </span>
                <span className="font-mono text-xs font-bold text-[#6B1F2A] bg-white px-2 py-0.5 rounded border border-[#6B1F2A]/20">
                  $9 USD
                </span>
              </div>
              <ul className="text-xs text-[#2B1D14] space-y-1 font-normal">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#6B1F2A]" />
                  <span>Acceso inmediato a los <b>34 audios completos</b> en 7 temas</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#6B1F2A]" />
                  <span>El ritual de honestidad financiera <i>El Domingo de los Números</i></span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#6B1F2A]" />
                  <span>Comunidad privada y nuevas lecciones añadidas</span>
                </li>
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={GUMROAD_CLUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 bg-[#6B1F2A] hover:bg-[#2B1D14] text-[#F7F1E6] font-mono text-xs uppercase tracking-[0.2em] rounded-sm transition duration-300 shadow-md text-center"
              >
                <span>Acceder Ahora ($9 USD)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={() => setLockedModalTrack(null)}
                className="w-full py-2 text-center font-mono text-[10px] text-[#7C6E65] hover:text-[#2B1D14] uppercase tracking-wider transition"
              >
                Volver a la muestra libre
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
