PGDMP     
    (                {            PowerStarDB    15.3    15.3 @    R           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            S           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            T           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            U           1262    16693    PowerStarDB    DATABASE     y   CREATE DATABASE "PowerStarDB" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.UTF-8';
    DROP DATABASE "PowerStarDB";
                postgres    false            �            1259    16747    Defensas    TABLE     W   CREATE TABLE public."Defensas" (
    id integer NOT NULL,
    defensa text NOT NULL
);
    DROP TABLE public."Defensas";
       public         heap    postgres    false            �            1259    16746    Defensas_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Defensas_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Defensas_id_seq";
       public          postgres    false    226            V           0    0    Defensas_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Defensas_id_seq" OWNED BY public."Defensas".id;
          public          postgres    false    225            �            1259    16755    Diplomacias    TABLE     �   CREATE TABLE public."Diplomacias" (
    id_reino_1 integer NOT NULL,
    id_reino_2 integer NOT NULL,
    es_aliado boolean NOT NULL
);
 !   DROP TABLE public."Diplomacias";
       public         heap    postgres    false            �            1259    16727    Karts    TABLE     �   CREATE TABLE public."Karts" (
    id integer NOT NULL,
    modelo character varying(45) NOT NULL,
    color character varying(45) NOT NULL,
    velocidad_maxima integer,
    id_personaje integer
);
    DROP TABLE public."Karts";
       public         heap    postgres    false            �            1259    16726    Karts_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Karts_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Karts_id_seq";
       public          postgres    false    221            W           0    0    Karts_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Karts_id_seq" OWNED BY public."Karts".id;
          public          postgres    false    220            �            1259    16733    Personaje_habita_reino    TABLE     �   CREATE TABLE public."Personaje_habita_reino" (
    id_personaje integer NOT NULL,
    id_reino integer NOT NULL,
    fecha_registro timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    es_gobernante boolean NOT NULL
);
 ,   DROP TABLE public."Personaje_habita_reino";
       public         heap    postgres    false            �            1259    16721    Personaje_tiene_trabajo    TABLE     �   CREATE TABLE public."Personaje_tiene_trabajo" (
    id_trabajo integer NOT NULL,
    id_pesonaje integer NOT NULL,
    fecha_inicio date NOT NULL,
    fecha_termino date
);
 -   DROP TABLE public."Personaje_tiene_trabajo";
       public         heap    postgres    false            �            1259    16715 
   Personajes    TABLE     �   CREATE TABLE public."Personajes" (
    id integer NOT NULL,
    nombre character varying(45) NOT NULL,
    fuerza integer NOT NULL,
    fecha_nacimiento date NOT NULL,
    objeto character varying(30)
);
     DROP TABLE public."Personajes";
       public         heap    postgres    false            �            1259    16714    Personajes_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Personajes_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."Personajes_id_seq";
       public          postgres    false    218            X           0    0    Personajes_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."Personajes_id_seq" OWNED BY public."Personajes".id;
          public          postgres    false    217            �            1259    16740    Reinos    TABLE     �   CREATE TABLE public."Reinos" (
    id integer NOT NULL,
    nombre character varying(45) NOT NULL,
    ubicacion character varying(45) NOT NULL,
    superficie integer NOT NULL
);
    DROP TABLE public."Reinos";
       public         heap    postgres    false            �            1259    16739    Reinos_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Reinos_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public."Reinos_id_seq";
       public          postgres    false    224            Y           0    0    Reinos_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public."Reinos_id_seq" OWNED BY public."Reinos".id;
          public          postgres    false    223            �            1259    16708    Trabajos    TABLE     �   CREATE TABLE public."Trabajos" (
    id integer NOT NULL,
    descripcion character varying(45),
    sueldo integer NOT NULL
);
    DROP TABLE public."Trabajos";
       public         heap    postgres    false            �            1259    16707    Trabajos_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Trabajos_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Trabajos_id_seq";
       public          postgres    false    216            Z           0    0    Trabajos_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Trabajos_id_seq" OWNED BY public."Trabajos".id;
          public          postgres    false    215            �            1259    16760    _DefensasToReinos    TABLE     `   CREATE TABLE public."_DefensasToReinos" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);
 '   DROP TABLE public."_DefensasToReinos";
       public         heap    postgres    false            �            1259    16696    _prisma_migrations    TABLE     �  CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);
 &   DROP TABLE public._prisma_migrations;
       public         heap    postgres    false            �           2604    16750    Defensas id    DEFAULT     n   ALTER TABLE ONLY public."Defensas" ALTER COLUMN id SET DEFAULT nextval('public."Defensas_id_seq"'::regclass);
 <   ALTER TABLE public."Defensas" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    226    225    226            �           2604    16730    Karts id    DEFAULT     h   ALTER TABLE ONLY public."Karts" ALTER COLUMN id SET DEFAULT nextval('public."Karts_id_seq"'::regclass);
 9   ALTER TABLE public."Karts" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    221    220    221            �           2604    16718    Personajes id    DEFAULT     r   ALTER TABLE ONLY public."Personajes" ALTER COLUMN id SET DEFAULT nextval('public."Personajes_id_seq"'::regclass);
 >   ALTER TABLE public."Personajes" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217    218            �           2604    16743 	   Reinos id    DEFAULT     j   ALTER TABLE ONLY public."Reinos" ALTER COLUMN id SET DEFAULT nextval('public."Reinos_id_seq"'::regclass);
 :   ALTER TABLE public."Reinos" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    223    224    224            �           2604    16711    Trabajos id    DEFAULT     n   ALTER TABLE ONLY public."Trabajos" ALTER COLUMN id SET DEFAULT nextval('public."Trabajos_id_seq"'::regclass);
 <   ALTER TABLE public."Trabajos" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    216    216            M          0    16747    Defensas 
   TABLE DATA           1   COPY public."Defensas" (id, defensa) FROM stdin;
    public          postgres    false    226   �N       N          0    16755    Diplomacias 
   TABLE DATA           J   COPY public."Diplomacias" (id_reino_1, id_reino_2, es_aliado) FROM stdin;
    public          postgres    false    227   DO       H          0    16727    Karts 
   TABLE DATA           T   COPY public."Karts" (id, modelo, color, velocidad_maxima, id_personaje) FROM stdin;
    public          postgres    false    221   pO       I          0    16733    Personaje_habita_reino 
   TABLE DATA           i   COPY public."Personaje_habita_reino" (id_personaje, id_reino, fecha_registro, es_gobernante) FROM stdin;
    public          postgres    false    222   P       F          0    16721    Personaje_tiene_trabajo 
   TABLE DATA           i   COPY public."Personaje_tiene_trabajo" (id_trabajo, id_pesonaje, fecha_inicio, fecha_termino) FROM stdin;
    public          postgres    false    219   �P       E          0    16715 
   Personajes 
   TABLE DATA           T   COPY public."Personajes" (id, nombre, fuerza, fecha_nacimiento, objeto) FROM stdin;
    public          postgres    false    218   Q       K          0    16740    Reinos 
   TABLE DATA           E   COPY public."Reinos" (id, nombre, ubicacion, superficie) FROM stdin;
    public          postgres    false    224   R       C          0    16708    Trabajos 
   TABLE DATA           =   COPY public."Trabajos" (id, descripcion, sueldo) FROM stdin;
    public          postgres    false    216   �R       O          0    16760    _DefensasToReinos 
   TABLE DATA           7   COPY public."_DefensasToReinos" ("A", "B") FROM stdin;
    public          postgres    false    228   �R       A          0    16696    _prisma_migrations 
   TABLE DATA           �   COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
    public          postgres    false    214   S       [           0    0    Defensas_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Defensas_id_seq"', 4, true);
          public          postgres    false    225            \           0    0    Karts_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."Karts_id_seq"', 10, true);
          public          postgres    false    220            ]           0    0    Personajes_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."Personajes_id_seq"', 15, true);
          public          postgres    false    217            ^           0    0    Reinos_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."Reinos_id_seq"', 4, true);
          public          postgres    false    223            _           0    0    Trabajos_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Trabajos_id_seq"', 5, true);
          public          postgres    false    215            �           2606    16754    Defensas Defensas_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Defensas"
    ADD CONSTRAINT "Defensas_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Defensas" DROP CONSTRAINT "Defensas_pkey";
       public            postgres    false    226            �           2606    16759    Diplomacias Diplomacias_pkey 
   CONSTRAINT     r   ALTER TABLE ONLY public."Diplomacias"
    ADD CONSTRAINT "Diplomacias_pkey" PRIMARY KEY (id_reino_1, id_reino_2);
 J   ALTER TABLE ONLY public."Diplomacias" DROP CONSTRAINT "Diplomacias_pkey";
       public            postgres    false    227    227            �           2606    16732    Karts Karts_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Karts"
    ADD CONSTRAINT "Karts_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."Karts" DROP CONSTRAINT "Karts_pkey";
       public            postgres    false    221            �           2606    16738 2   Personaje_habita_reino Personaje_habita_reino_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."Personaje_habita_reino"
    ADD CONSTRAINT "Personaje_habita_reino_pkey" PRIMARY KEY (id_personaje, id_reino);
 `   ALTER TABLE ONLY public."Personaje_habita_reino" DROP CONSTRAINT "Personaje_habita_reino_pkey";
       public            postgres    false    222    222            �           2606    16725 4   Personaje_tiene_trabajo Personaje_tiene_trabajo_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."Personaje_tiene_trabajo"
    ADD CONSTRAINT "Personaje_tiene_trabajo_pkey" PRIMARY KEY (id_pesonaje, id_trabajo);
 b   ALTER TABLE ONLY public."Personaje_tiene_trabajo" DROP CONSTRAINT "Personaje_tiene_trabajo_pkey";
       public            postgres    false    219    219            �           2606    16720    Personajes Personajes_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public."Personajes"
    ADD CONSTRAINT "Personajes_pkey" PRIMARY KEY (id);
 H   ALTER TABLE ONLY public."Personajes" DROP CONSTRAINT "Personajes_pkey";
       public            postgres    false    218            �           2606    16745    Reinos Reinos_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public."Reinos"
    ADD CONSTRAINT "Reinos_pkey" PRIMARY KEY (id);
 @   ALTER TABLE ONLY public."Reinos" DROP CONSTRAINT "Reinos_pkey";
       public            postgres    false    224            �           2606    16713    Trabajos Trabajos_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Trabajos"
    ADD CONSTRAINT "Trabajos_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Trabajos" DROP CONSTRAINT "Trabajos_pkey";
       public            postgres    false    216            �           2606    16704 *   _prisma_migrations _prisma_migrations_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);
 T   ALTER TABLE ONLY public._prisma_migrations DROP CONSTRAINT _prisma_migrations_pkey;
       public            postgres    false    214            �           1259    16763    _DefensasToReinos_AB_unique    INDEX     h   CREATE UNIQUE INDEX "_DefensasToReinos_AB_unique" ON public."_DefensasToReinos" USING btree ("A", "B");
 1   DROP INDEX public."_DefensasToReinos_AB_unique";
       public            postgres    false    228    228            �           1259    16764    _DefensasToReinos_B_index    INDEX     Z   CREATE INDEX "_DefensasToReinos_B_index" ON public."_DefensasToReinos" USING btree ("B");
 /   DROP INDEX public."_DefensasToReinos_B_index";
       public            postgres    false    228            �           2606    16790 '   Diplomacias Diplomacias_id_reino_1_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Diplomacias"
    ADD CONSTRAINT "Diplomacias_id_reino_1_fkey" FOREIGN KEY (id_reino_1) REFERENCES public."Reinos"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 U   ALTER TABLE ONLY public."Diplomacias" DROP CONSTRAINT "Diplomacias_id_reino_1_fkey";
       public          postgres    false    224    227    4259            �           2606    16795 '   Diplomacias Diplomacias_id_reino_2_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Diplomacias"
    ADD CONSTRAINT "Diplomacias_id_reino_2_fkey" FOREIGN KEY (id_reino_2) REFERENCES public."Reinos"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 U   ALTER TABLE ONLY public."Diplomacias" DROP CONSTRAINT "Diplomacias_id_reino_2_fkey";
       public          postgres    false    224    4259    227            �           2606    25183    Karts Karts_id_personaje_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Karts"
    ADD CONSTRAINT "Karts_id_personaje_fkey" FOREIGN KEY (id_personaje) REFERENCES public."Personajes"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 K   ALTER TABLE ONLY public."Karts" DROP CONSTRAINT "Karts_id_personaje_fkey";
       public          postgres    false    4251    221    218            �           2606    16780 ?   Personaje_habita_reino Personaje_habita_reino_id_personaje_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Personaje_habita_reino"
    ADD CONSTRAINT "Personaje_habita_reino_id_personaje_fkey" FOREIGN KEY (id_personaje) REFERENCES public."Personajes"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 m   ALTER TABLE ONLY public."Personaje_habita_reino" DROP CONSTRAINT "Personaje_habita_reino_id_personaje_fkey";
       public          postgres    false    222    4251    218            �           2606    16785 ;   Personaje_habita_reino Personaje_habita_reino_id_reino_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Personaje_habita_reino"
    ADD CONSTRAINT "Personaje_habita_reino_id_reino_fkey" FOREIGN KEY (id_reino) REFERENCES public."Reinos"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 i   ALTER TABLE ONLY public."Personaje_habita_reino" DROP CONSTRAINT "Personaje_habita_reino_id_reino_fkey";
       public          postgres    false    224    222    4259            �           2606    16770 @   Personaje_tiene_trabajo Personaje_tiene_trabajo_id_pesonaje_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Personaje_tiene_trabajo"
    ADD CONSTRAINT "Personaje_tiene_trabajo_id_pesonaje_fkey" FOREIGN KEY (id_pesonaje) REFERENCES public."Personajes"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 n   ALTER TABLE ONLY public."Personaje_tiene_trabajo" DROP CONSTRAINT "Personaje_tiene_trabajo_id_pesonaje_fkey";
       public          postgres    false    4251    219    218            �           2606    16765 ?   Personaje_tiene_trabajo Personaje_tiene_trabajo_id_trabajo_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Personaje_tiene_trabajo"
    ADD CONSTRAINT "Personaje_tiene_trabajo_id_trabajo_fkey" FOREIGN KEY (id_trabajo) REFERENCES public."Trabajos"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 m   ALTER TABLE ONLY public."Personaje_tiene_trabajo" DROP CONSTRAINT "Personaje_tiene_trabajo_id_trabajo_fkey";
       public          postgres    false    4249    219    216            �           2606    16800 *   _DefensasToReinos _DefensasToReinos_A_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."_DefensasToReinos"
    ADD CONSTRAINT "_DefensasToReinos_A_fkey" FOREIGN KEY ("A") REFERENCES public."Defensas"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 X   ALTER TABLE ONLY public."_DefensasToReinos" DROP CONSTRAINT "_DefensasToReinos_A_fkey";
       public          postgres    false    226    228    4261            �           2606    16805 *   _DefensasToReinos _DefensasToReinos_B_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."_DefensasToReinos"
    ADD CONSTRAINT "_DefensasToReinos_B_fkey" FOREIGN KEY ("B") REFERENCES public."Reinos"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 X   ALTER TABLE ONLY public."_DefensasToReinos" DROP CONSTRAINT "_DefensasToReinos_B_fkey";
       public          postgres    false    228    224    4259            M   =   x�3���,��Q(I-���+M�IM,�2�t�J-J�,��2�t+M-�JTH<��(5�+F��� �p      N      x�3�4�,�2�4��@2�+F��� +�{      H   �   x�-��
�0F��>E67i"�g,"ti�r�-��\-�����Ŭ��M���"��a���T�vhZhC���8K/0���H���.�����ΐ�Q��F���F;Tܮ�M��j�����Dq����x@)QT����*�ϵ�|��D��!/�      I   �   x�m���0��TE0�B���
��듉����aу�����:Hf+���"x�
�YyWy(f d��_EC9ש��:v
#��Ν
�xK?!F>.�V'���R��z}�Ȼl�>�3�:V!V��:�;��[V�
;���M�B�      F   P   x�u��� �oإ'������п/$|�wG�@��k���'	4��IvS�������⠐N�$0&��rz7nU�n1�      E   �   x�u�=n�0Fg���
R�Q<vh����NE"bS#�]X��z�^���LF	n���Zx��˲XDk�6���j�0]�@X�U�`k��2�������3*�A��U���QT���3u�����q
��Km�����S�]!Ֆt��[BXP�e��n�n���a��+%w��X���͞�K\fVT���I�[@z��5<�/�x\��ͭ
6Yi`?���k�Rǌ]      K   s   x�3�J���WH�H�-�<�1?�ӱLO��� ���DC3��Ĝ�Ģ��k��9���9=*�JsR9��J2��9M��L8=�s\RsҀ&r�'�&�^��i����� ؏"�      C   J   x�3�tL���S.-(J����5�2�tN,*��+I-��44�2�t/J���L�L9�s�-�L���=...  �}      O      x�3�4�2�4�2�&`l�&\1z\\\ 4�y      A   `  x�m�[j�AF��Ud��}$/�+�hn�������I�
���A)����Yd����dZf�5��C/������� b�(��; �hQF/�,�f���6l6���=����'����]0` f�}�\�o��o��db��x��4�p3��BO�y�������w��
H�I��i{jDU�ZꦥƴJг�	�(��"�0�g��*�C� �@���z������������+��&)x�!��Ph[W�Mx��Q�f�}dR(�b�\�F6�C����Q'-�H�̙/l�
Z�B�}��)��UE�+�'.�4�^���x��5_/_���UK܉�O���7oҗ     